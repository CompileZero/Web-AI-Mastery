"""NUI Galway CT5132/CT5148 Programming and Tools for AI (James McDermott)

Skeleton/solution for Assignment 1: Numerical Integration

By writing my name below and submitting this file, I/we declare that
all additions to the provided skeleton file are my/our own work, and that
I/we have not seen any work on this assignment by another student/group.

Student name(s): Tapan Auti, Atharva Kulkarni
Student ID(s): 20231499, 20231773

"""

import numpy as np
import sympy
import math


def numint_py(f, a, b, n):
    """Numerical integration. For a function f, calculate the definite
    integral of f from a to b by approximating with n "slices" and the
    "lb" scheme. This function must use pure Python, no Numpy.

    >>> round(numint_py(math.sin, 0, 1, 100), 5)
    0.45549
    >>> round(numint_py(lambda x: 1, 0, 1, 100), 5)
    1.0
    >>> round(numint_py(math.exp, 1, 2, 100), 5)
    4.64746

    """
    w = (b - a) / n  # width of one slice
    A = 0
    xn = a
    x_range = []
    area = 0

    # Calculate values of x at every width interval (x1, x2, x3 ... xn)
    while xn <= b:
        x_range.append(xn)
        xn += w

    # Calculate total area
    for x in x_range:
        y = f(x)
        area += y * w

    return area


def numint(f, a, b, n, scheme='mp'):
    """Numerical integration. For a function f, calculate the definite
    integral of f from a to b by approximating with n "slices" and the
    given scheme. This function should use Numpy, and eg np.linspace()
    will be useful.

    >>> round(numint(np.sin, 0, 1, 100, 'lb'), 5)
    0.45549
    >>> round(numint(lambda x: np.ones_like(x), 0, 1, 100), 5)
    1.0
    >>> round(numint(np.exp, 1, 2, 100, 'lb'), 5)
    4.64746
    >>> round(numint(np.exp, 1, 2, 100, 'mp'), 5)
    4.67075
    >>> round(numint(np.exp, 1, 2, 100, 'ub'), 5)
    4.69417

    """
    # STUDENTS ADD CODE FROM HERE TO END OF FUNCTION

    w = (b - a) / n  # width of one slice
    area = 0

    # Calculate values of x at every width interval (x1, x2, x3 ... xn)
    x_range = np.arange(a, b, w)
    size_of_list = len(x_range)

    # For scheme 'ub' and 'mp', add point b to x_range
    if scheme == "ub" or scheme == "mp":
        x_range = np.insert(x_range, len(x_range), b)

    # Calculate total area
    for i in range(0, size_of_list):
        if scheme == "lb":
            y = f(x_range[i])   # Starting from index 0 for 'lb'
        elif scheme == "ub":
            y = f(x_range[i+1])  # Starting from index 1 for 'ub'
        elif scheme == "mp":
            y = f(((x_range[i] + x_range[i + 1]) / 2))
        area += y * w

    return area


def true_integral(fstr, a, b):
    """Using Sympy, calculate the definite integral of f from a to b and
    return as a float. Here fstr is an expression in x, as a str. It
    should use eg "np.sin" for the sin function.

    This function is quite tricky, so you are not expected to
    understand it or change it! However, you should understand how to
    use it. See the doctest examples.

    >>> true_integral("np.sin(x)", 0, 2 * np.pi)
    0.0
    >>> true_integral("x**2", 0, 1)
    0.3333333333333333

    STUDENTS SHOULD NOT ALTER THIS FUNCTION.

    """
    x = sympy.symbols("x")
    # make fsym, a Sympy expression in x, now using eg "sympy.sin"
    fsym = eval(fstr.replace("np", "sympy"))
    A = sympy.integrate(fsym, (x, a, b))  # definite integral
    A = float(A.evalf())  # convert to float
    return A


def numint_err(fstr, a, b, n, scheme):
    """For a given function fstr and bounds a, b, evaluate the error
    achieved by numerical integration on n points with the given
    scheme. Return the true value, absolute error, and relative error
    as a tuple.

    Notice that the relative error will be infinity when the true
    value is zero. None of the examples in our assignment will have a
    true value of zero.

    >>> print("%.4f %.4f %.4f" % numint_err("x**2", 0, 1, 10, 'lb'))
    0.3333 0.0483 0.1450

    """

    # STUDENTS ADD CODE FROM HERE TO END OF FUNCTION

    f = eval("lambda x: " + fstr)  # f is a Python function

    # Calculate true area under the curve
    A = true_integral(fstr, a, b)

    # Numerical Integration of the curve
    num_int = numint(f, a, b, n, scheme)

    # Calculate Absolute Error
    abs_error = abs(A - num_int)

    # Calculate Relative Error
    rel_error = abs_error / A

    return A, abs_error, rel_error


def make_table(f_ab_s, ns, schemes):
    """For each function f with associated bounds (a, b), and each value
    of n and each scheme, calculate the absolute and relative error of
    numerical integration and print out one line of a table. This
    function doesn't need to return anything, just print. Each
    function and bounds will be a tuple (f, a, b), so the argument
    f_ab_s is a list of tuples.

    Hint 1: use print() with the format string
    "%s,%.2f,%.2f,%d,%s,%.4g,%.4g,%.4g", or an equivalent f-string approach.

    Hint 2: consider itertools.

    >>> make_table([("x**2", 0, 1), ("np.sin(x)", 0, 1)], [10, 100], ['lb', 'mp'])
    x**2,0.00,1.00,10,lb,0.3333,0.04833,0.145
    x**2,0.00,1.00,10,mp,0.3333,0.0008333,0.0025
    x**2,0.00,1.00,100,lb,0.3333,0.004983,0.01495
    x**2,0.00,1.00,100,mp,0.3333,8.333e-06,2.5e-05
    np.sin(x),0.00,1.00,10,lb,0.4597,0.04246,0.09236
    np.sin(x),0.00,1.00,10,mp,0.4597,0.0001916,0.0004168
    np.sin(x),0.00,1.00,100,lb,0.4597,0.004211,0.009161
    np.sin(x),0.00,1.00,100,mp,0.4597,1.915e-06,4.167e-06

    """

    # STUDENTS ADD CODE FROM HERE TO END OF FUNCTION

    # For every mathematical function
    for i in range(0, len(f_ab_s)):
        # For every value of n
        for n in ns:
            # For every scheme
            for scheme in schemes:
                f, a, b = f_ab_s[i]  # Retreive function, a and b from tuple
                # Calculate True Integral and errors for a particular combination of function, n and scheme
                A, abs_err, rel_err = numint_err(str(f), a, b, n, scheme)
                print("%s,%.2f,%.2f,%d,%s,%.4g,%.4g,%.4g" %
                      (f, a, b, n, scheme, A, abs_err, rel_err))


def main():
    """Call make_table() as specified in the pdf."""
    # STUDENTS ADD CODE FROM HERE TO END OF FUNCTION

    make_table([("np.cos(x)", 0, np.pi / 2),
                ("np.sin(2*x)", 0, 1),
                ("np.exp(x)", 0, 1)],
               [10, 100, 1000],
               ['lb', 'mp'])


"""
main() RESULTS: 

Based on the observed results, the values of the absolute and relative error were much lesser for the 'mp' than that of 'lp' for the same equation. Hence, we can conclude that the 'mp' scheme is better than 'lp'.

The relative and absolute error was 95% - 98% lesser in the 'mp' scheme than 'lb' across all the three functions.

When we calculate the area of the error region in the 'mp' scheme, it is much more closer to the true integral value. Hence, 'mp' scheme is preferred (mostly) over the other two schemes.
"""


def numint_nd(f, a, b, n):
    """numint in any number of dimensions.

    f: a function of m arguments
    a: a tuple of m values indicating the lower bound per dimension
    b: a tuple of m values indicating the upper bound per dimension
    n: a tuple of m values indicating the number of steps per dimension

    STUDENTS ADD DOCTESTS

    >>> numint_nd((np.sin, np.cos), (0, 0), (1, 10), (10, 100))
    [0.41724099961758165, -0.4516141079333242]

    >>> print(*(round(num, 5) for num in (numint_nd((np.sin, np.cos), (0, 0), (1, 10), (10, 100)))))
    0.41724 -0.45161

    >>> numint_nd((lambda x: x**2, np.exp), (0, 0), (1, 10), (10, 100))
    [0.2850000000000001, 20942.5440015311]
    """

    # My implementation uses Numpy and the mid-point scheme, but you
    # are free to use pure Python and/or any other scheme if you prefer.

    # Hint: calculate w, the step-size, per dimension
    # w = [(bi - ai) / ni for (ai, bi, ni) in zip(a, b, n)]

    # STUDENTS ADD CODE FROM HERE TO END OF FUNCTION

    num_int = list()

    # For every function, a, b and n from individual tuples
    for (fi, ai, bi, ni) in zip(f, a, b, n):
        # Calculate Numerical Integration for retreived values of function, a, b and n
        num_int.append(numint(fi, ai, bi, ni, scheme='lb'))
    return num_int


if __name__ == "__main__":
    import doctest
    doctest.testmod()
    main()
