 

public class Email {
    
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String emailType;
    private String message;
    
    public Email(Customer customer) {
        firstName = customer.getFirstName();
        lastName = customer.getLastName();
        emailAddress = customer.getEmailAddress();
    }

    public void send(){
        System.out.println(message);
        
    }
    
    public void createMessage(String messageType, Order order){
        if(messageType.equals("ORDER_SUCCESS")){
            createOrderSuccessMessage(order);
        }else{
            createOrderFailureMessage(order);
        }
        
    }
    
    private void createOrderSuccessMessage(Order order){
        message = "To: " + emailAddress + "\n\n";
        message += " Dear " + firstName + ",\n"; 
        message += " Thank you for your order, number " + order.getOrderId() + ".\n";
        message += " We will dispatch it shortly. The items you have ordered are listed below \n\n";
        message += order;
    }

    private void createOrderFailureMessage(Order order){
        message = "To: " + emailAddress + "\n\n";
        message += " Dear " + firstName + ",\n"; 
        message += " We regret that we have been unable to fulfill your order, number " + order.getOrderId() + ".\n";
        message += " Your payment was declined by your company \n"  ;
        message += order;
    }
    
    
    

    
}
