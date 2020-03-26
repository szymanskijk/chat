package jk.szymanski.chat;

public class ChatMessage {

    private String message;

    public ChatMessage(String message) {
        this.message = message;
    }

    public ChatMessage() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
