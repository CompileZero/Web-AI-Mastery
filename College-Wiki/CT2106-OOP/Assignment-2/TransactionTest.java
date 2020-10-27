
/**
 * TransactionTest is a class that does one thing only
 * It provides methods for testing out different test scenarios 
 * for our Shopping Cart Transaction classes
 * @author Ihsan Ullah
 * @version 09 October 2018
 */
public class TransactionTest
{
    
    /**
     * main method to execute the TransactionTest methods
     */
    public static void main(String[] args)
    {
       TransactionTest test = new TransactionTest();
       test.transaction1(); // calls the method with our test scenario
       test.transaction2();
    }
    
    public void transaction1(){ 
        System.out.println("Transaction Scenario 1 "); 
    
        //1. Create New Customer
        Customer customer = new Customer("Niamh", "O'Leary", "niamhol@zmail.com");
   
        // 2. Create a Shopping Cart for the Customer
        ShoppingCart cart = new ShoppingCart(customer);
    
        //3.Add 3 items to the Cart
        Item item1 = new Item("Exon D7 Print Cartridge", 6555533);
        item1.setPrice(4);
        cart.addItem(item1);
   
        Item item2 = new Item("Lexico B12 Nail Gun", 433310);
        item2.setPrice(24);
        cart.addItem(item2);
   
        Item item3 = new Item("Bob the Builder Action Toy", 33570);
        item3.setPrice(8);
        cart.addItem(item3);
   
        // 4. Finalise the Cart
        cart.close();
   
        // 4. Create an order
        Order order = new Order(cart);
   
        //5. Create a delivery address
        Address delivery = new Address();
        delivery.setAddressField1(" 74 Slí an tSrutháin");
        delivery.setAddressField2 ("Moycullen");
        delivery.setCity ("Galway");
        delivery.setCity ("Ireland");
        delivery.setZip ("H90 GUFY");
   
        //5. add a delivery address to the order
        order.setAddress(delivery);
   
        //6. Create an invoice address
        Address invoice = new Address(delivery);
   
        //7 Create a Payment object and validate it
        Payment payment = new Payment(customer, invoice, "Visa", "ABCBank", 1233333333, "09/10/2018", order);
  
        //8 create a new email object for the customer
        Email email = new Email(customer); 
        
        if (order.getPaymentSucess()){
            email.createMessage("ORDER_SUCCESS", order); //create a message for the sucess email
        }else{
            email.createMessage("ORDER_FAIL", order); // create a message for the failure email
        }
        email.send(); //send the email
    }
    
    
    
    public void transaction2(){  
    
    System.out.println("Transaction Scenario 2 ");
    
    //1. Create New Customer
    Customer customer = new Customer("Séamus", "McCabe", "shaymc@ymail.com");
   
    // 2. Create a Shopping Cart for the Customer
    ShoppingCart cart = new ShoppingCart(customer);
    
    //3.Add 3 items to the Cart
    Item item1 = new Item("Ted Earwater, Galway Gurl CD", 73334);
    item1.setPrice(15);
    cart.addItem(item1);
   
    Item item2 = new Item("Barry Potty and the Witches of Eastwich book", 23710);
    item2.setPrice(10);
    cart.addItem(item2);
   
    Item item3 = new Item("Sabrina the Witch Action Toy", 33570);
    item3.setPrice(16);
    cart.addItem(item3);
    
    //4. requests display of the shopping cart
    System.out.println(cart);
    
    //5. removes one ites
    
    cart.removeItem(1); //remove 2nd item (index 1_
    
    //cart.removeItem(item2); alternative approach to removing an items
   
    // 4. Finalise the Cart
    cart.close();
  
    // 5. Create an order
    Order order = new Order(cart);
   
    //6. Create a delivery address
    Address delivery = new Address();
    delivery.setAddressField1(" 23 Bothair na dTreamh");
    delivery.setAddressField2 ("Knocknaccara");
    delivery.setCity ("Galway");
    delivery.setCity ("Ireland");
    delivery.setZip ("H77D1EE");
   
    //6. add a delivery address
    order.setAddress(delivery);
   
    //6. Create an invoice address
    Address invoice = new Address(delivery);
   
    //7 Create a Payment object
    Payment payment = new Payment(customer, invoice, "Amex","ABCBank", 67783333, "09/10/2018", order);
  
    //8 email the customer
    Email email = new Email(customer); // create an Email object for this customer

    if (order.getPaymentSucess()){
        email.createMessage("ORDER_SUCCESS", order); //create a message for the email
     }else{
        email.createMessage("ORDER_FAIL", order); 
     }
    email.send(); //send the email
    }
}
