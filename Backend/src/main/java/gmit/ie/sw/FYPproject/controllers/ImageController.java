package gmit.ie.sw.FYPproject.controllers;

import java.io.File;
import java.io.IOException;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.Mongo;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSInputFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gmit.ie.sw.FYPproject.models.Image;
import gmit.ie.sw.FYPproject.repository.ImageMongoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ImageController {

    //instance
    @Autowired
    ImageMongoRepository imageRepository;

    //get all images
    @GetMapping("/images")
    public  List<Image> getAllimages(){
        System.out.println("Get all images");

        return imageRepository.findAll();
    }

    //create an image
    @PostMapping("/images")
    public Image createimage(@Valid @RequestBody Image image){
        System.out.println("Create Image: " + image.getImage() + "...");

        return imageRepository.save(image);
    }

    //get image by id
    @GetMapping("/images/{id}")
    public ResponseEntity<Image> getimage(@PathVariable("id") String id){
        System.out.println("Update image with ID = " + id + "...");;
        Optional<Image> imageData = imageRepository.findById(id);
        if(imageData.isPresent()) {
            return new ResponseEntity<>(imageData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //update an image by id
    @PutMapping("/images/{id}")
    public ResponseEntity<Image> updateimage(@PathVariable("id") String id, @RequestBody Image image){
        System.out.println("Update image with ID = " + id + "...");

        Optional<Image> imageData = imageRepository.findById(id);
        if ( imageData.isPresent()){
            Image savedimage = imageData.get();
            savedimage.setImage(image.getImage());

            Image updatedImage = imageRepository.save(savedimage);
            return new ResponseEntity<>(updatedImage, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    //delete image
    @DeleteMapping("/images/{id}")
    public ResponseEntity<String> deleteimage(@PathVariable("id") String id) {
        System.out.println("Delete image with ID = " + id + "...");

        try {
            imageRepository.deleteById(id); } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Image has been deleted!", HttpStatus.OK);
    }

    //delete all images
    @DeleteMapping("/images/delete")
    public ResponseEntity<String> deleteAllimages() {
        System.out.println("Delete All images...");

        try {
            imageRepository.deleteAll(); } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("All images have been deleted!", HttpStatus.OK);
    }


}
