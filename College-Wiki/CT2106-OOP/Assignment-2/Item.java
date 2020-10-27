 

public class Item {
    private String name;
    private int price;
    private long itemId;

    public Item(String itemName, long id) {
        name = itemName;
        itemId = id;
    }
    
    public void setPrice(int price){
        this.price = price;
    }

    public int getPrice() {
        return price;
    }
    
    /**
    * toString method provides a String output of the object
    * every object has a generic toString method inherited from
    * java.lang.Object
    */
    @Override
    public String toString(){
        String out = "Item Id: " + itemId + "\t" + name +"\tPrice: " + price;
        return out;
    }
}
