package gmit.ie.sw.FYPproject.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import gmit.ie.sw.FYPproject.models.Image;


public interface ImageMongoRepository extends MongoRepository<Image, String>{

}
