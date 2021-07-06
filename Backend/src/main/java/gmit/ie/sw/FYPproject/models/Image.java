package gmit.ie.sw.FYPproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection  = "items")
public class Image {

    //Declaration of variables
    @Id
    private String id;

    private String image;

    public Image(){

    }

    //getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }



    //toString method
    @Override
    public String toString() {
        return "Item [id=" + id + ", image=" + image + "]";
    }
}
