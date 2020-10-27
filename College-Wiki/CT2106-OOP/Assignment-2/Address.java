 

public class Address {
    String addressField1;
    String addressField2;
    String city;
    String zip;
    String country;
    
    // note that there are 3 constructors in this class
    //which gives a lot of flexibility in how to create an Address object
    //default constructor
    public Address(){
        
    }
    
    //takes the individual address fields as inout parameters
    public Address(String ad1, String ad2, String city, String zip, String country){
        addressField1 = ad1;
        addressField2 = ad2;
        this.city = city;
        this.zip = zip;
        this.country = country;
    }
    
    //takes another address object as an input parameters
    public Address(Address address) {
        addressField1= address.getAddressField1();
        addressField2= address.getAddressField2();
        city= address.getCity();
        zip= address.getZip();
        country = address.getCountry();
    }
    
    

    public void setAddressField1(String address1){
        addressField1 = address1;
       
    }
    
    public void setAddressField2(String address2){
        addressField2 = address2;
       
    }
    
    public void setCity(String city){
        this.city = city;
       
    }
    
    public void setZip(String zip){
        this.zip = zip;
       
    }
    
    public void setCounty(String country){
        this.country = country;
       
    }
    
    public String getAddressField1(){
        return addressField1;
    }
    
    public String getAddressField2(){
        return addressField2;
    }
    
    public String getCity(){
        return city;
    }
    
    public String getZip(){
        return zip;
    }
    
    public String getCountry(){
        return country;
    }
}
