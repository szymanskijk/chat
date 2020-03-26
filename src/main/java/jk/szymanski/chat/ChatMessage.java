package jk.szymanski.chat;

public class ChatMessage {

    private String value;

    public ChatMessage(String message) {
        this.value = message;
    }

    public ChatMessage() {
    }

    public String getMessage() {
        return value;
    }

    public void setMessage(String message) {
        this.value = message;
    }
}
