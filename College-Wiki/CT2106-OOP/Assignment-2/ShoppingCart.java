 
import java.util.ArrayList;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Shopping Cart class contains the functionality to hold items 
 * for a customer during a shopping session
 * and then transfer those items and customer data to an order item
 */

public class ShoppingCart {
    
    private final long cartId; // a unique id for the Cart
    private Customer customer; // a reference to the Customer that 'owns' this cart
    private ArrayList<Item> items; // ArrayList to hold the cart items
    private String timeStamp; // the time the cart was created
    private boolean closed = false; // boolean to indicate if the cart is closed or open for more items
    
    /**
       * Constructor for ShoppingCart
       * param customer, a reference to a Customer object
    */
    public ShoppingCart(Customer customer){
        cartId = getNewId(); // calls a method to create an id. You could just assign a number
        items = new ArrayList<>(); //initialie the Arraylist
        timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date()); // I didn't know how to do this - I looked it up on the Web
        this.customer = customer;
    }
    
    
    public void addItem(Item item) {
        if(!closed){
            items.add(item);
        }
    }
    
 /**
 * This method is used where we give the Cart the responsbility of transferring items to the order
 * This was discussed in the lecture on the solution
 */
    public void fillOrder(Order order){
        if(closed){ // if the Cart is closed
          for(Item item : items){ // for each item in the cart
              order.addItem(item); // call the addItem in order
          }
        items.clear(); // then clear the cart
         }
    }
    
    public Item getItem(int index){
        return items.get(index);
    }
    
    public int getNumItems(){
        return  items.size();
    }
    
    public void removeItem(int index) {
        if(!closed){
            items.remove(index);
        }
    }
    
    public void removeItem(Item item) {
        items.remove(item);
    }
    
    private long getNewId(){
        long id = (long)(1000000000L * Math.random());
        return id;
    }
    
  
    public void close(){
        closed = true;
    }
    
    public long getCustomerId() {
        return customer.getId();
    }
    

    public long getCartId() {
        return cartId;
    }

    public boolean hasItems() {
        if(items.size() > 0){
            return true;
        }
        return false;
    }

    /*
     * This method should be used with hasItems, which will check if there are 
     * items in the Cart
     * getNext() can then be called to remove and returns the item at position 0 (first position) in the 
     * ArrayList
     */
    
    public Item getNext() {
        return items.remove(0); // 
    }

    public Customer getCustomer() {
   
       return customer;
    }

    @Override
    public String toString(){
        String out = "Cart Details \n";
        
        out+= "******************************\n";
    
        for (Item item: items){
            out+=item + "\n";
        }
        out+="________________________________\n";
        out+= "Cart Total:\t\t" + getCartTotal();

        return out;
        
    }
    
    public int getCartTotal(){
        int total = 0;
        for (Item item: items){
            total+=item.getPrice();
        }
        return total;
    }
    
 /**
 *  clears the cart contents
 
 */
    public void clear() {
        items.clear();
    }
}
