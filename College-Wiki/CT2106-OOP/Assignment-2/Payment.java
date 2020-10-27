 /**
 *The payment class is in charge of validating the raw payment 
 *informaiton that is submitted via its constructor
 *It also has the capacity to authorise the payment
 */

public class Payment {
    private final Customer customer;
    private final String cardType;
    private final long number;
    private final double amount;
    private final String date;
    private Address address;
    private boolean valid;
	private final String cardBankName;
    
 /**
 * Constructor for payment 
 * note that it doesn't make use of the Customer object at the moment
 * I included a reference to customer for the sale of realism
 */
    public Payment(Customer customer, Address address, String cardType, String cardBankName,
    long number, String date, Order order) {
        this.customer = customer;
        this.cardType = cardType;
		this.cardBankName = cardBankName;
        this.number = number;
        this.date = date;
        this.address = address;
        this.amount = order.getOrderTotal();
        validate();
        // if the payment is validated then make the payment
        if(isValid()){// first check if it is valid
            makePayment(order); // then make the payment
        }else{
            order.setStatus("PAYMENT_FAILURE");
        }
    }
    
 /**
 * validate() is the method called by Payment to check the correctness of
 * the payment data submittd
 * If the data is validated, the valid field is set to true
 * Note that this is a private method. This means that this method is not
 * visible or callable outside the class. Only other Payment methods can call it.
 * In this case, the Payment constructor calls it
 */
    private void validate(){
        // normally send the details securely to a credit card centre
        if ((cardType.equalsIgnoreCase("Visa")|| cardType.equalsIgnoreCase("MasterCard"))  
        && number > 12345 && amount <10000){
            valid = true;
        }
    }
   
    
 /**
 * another private method which simulates the action of the Payment object
 * acutally authorising payment. As a private method, makePayment is not
 * visible or callable outside the class. Only other Payment methods can call it.
 * In this case, the Payment constructor calls it.
 * This means that only Payment code can call this method - which probably makes sense.
 * It sould not do to have other external objects authorising payment
 */
    private void makePayment(Order order) {
        // normally send the details securely to a credit card centre
        order.setStatus("PAYMENT_SUCCESS");
        order.setPaymentType(cardType);
    }

    /**
 * a 'getter' class fo the valid field
 * I have named it isValid instead of getValid simply
 * because it will read better when called
 * e.g. if(payment.isvalid()){
 *     // do something
 *     }
 */
    public boolean isValid() {
        return valid;
    }
    

}
