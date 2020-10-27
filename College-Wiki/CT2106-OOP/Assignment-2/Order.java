 

import java.util.ArrayList;

/**
 * Order class contains the order items that were
 * finalised by the Cart class
 * It contains all the data required to get the order 
 * from order initiation to notificaiton to  delivery
 */

public class Order {
    private final long orderId; // a unique Id for the order
    private final Customer customer; // a reference to the Customer
    private long cartId; // a reference to the Cart that initiated the Order - nice but not necessary
    private ArrayList<Item> orderItems = new ArrayList<Item>(); // An arraylist to hold the order items
    private double orderTotal; // the total of the order
    private Address delivery; // a reference to an Address object for the delivery details
    private String paymentType; // a reference to the payment Type -  nice but not necessary
    private String orderStatus = "PREPAYMENT"; // possible values : PREPAYMENT, PAYMENT_SUCCESS, PAYMENT_FAILURE
    
    public Order(ShoppingCart cart){
        orderId = getNewId(); // every order should be assigned a unique number
        customer = cart.getCustomer(); // gets a reference to the Customer object
        cartId = cart.getCartId(); // keep a record of what cart initiated the ordr
        int numItems = cart.getNumItems();
        
        while(cart.hasItems()){
            Item item = cart.getNext();
            orderItems.add(item);
            orderTotal+=item.getPrice();
        }
    
         
        /*fill order method 2
        for(int i = 0; i< numItems; i++){
            Item item = cart.getItem(i);
            orderItems.add(item);
            orderTotal+=item.getPrice();
        }
        cart.clear();
        */   
        
        // fill order method 1
         //cart.fillOrder(this);
        
        }
    
     /**
     * returns an ID randomly generated. 
     * Math.random returns a random value between 0 and 1
     * This is multiplied by 1000000000L - a long int to generated a long int number.
     * A real system would make a call to a data base to
     * retrieve a unique ID
     *
     */
    private long getNewId(){
        long id = (long)(1000000000L * Math.random()); //Math.random returns a random value between 0 and 1
        return id;
    }
    
    public void addItem(Item item){
        orderItems.add(item);
    }

    
    public long getOrderNumber(){
        return orderId;
    }

    public void setAddress(Address delivery) {
        this.delivery = delivery;
        
    }

    public long getOrderId() {
        return orderId;
    }

    public double getOrderTotal() {
        return orderTotal;
    }

    public boolean getPaymentSucess() {
        return orderStatus.equals("PAYMENT_SUCCESS");
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
        
    }

    public String getPaymentType(String paymentType) {
         return paymentType;
    }
    
    public void setStatus(String status) {
        orderStatus = status; // how would you check that status refersw to a valid status string
    }
    
    
    public String getStatus() {
        return orderStatus;
    }
    
    
      /**
      * implementation of the toString() method (inherited from java.lang.Object) which returns
      * a String representation of the object
      */
    
    @Override
    public String toString(){
        String out = "Order Details for order number " ;
        out += orderId;
        out += "\n";
        
        out+= "******************************\n";
    
        for (Item item: orderItems){
            out+=item + "\n";
        }
        out+="________________________________\n";
        out+= "Order Total:\t\t";
        out+= + getOrderTotal();
        out+="\n";
        out+= "Order status: ";
        out+= getStatus();
        out+="\n";
        
        return out;
        
    }

}
