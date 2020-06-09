package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.Product;
import canteen.persistence.ProductRepository;

@Service
public class ProductsService {
    ProductRepository productRepository;

    @Autowired
    public ProductsService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Product> getAllProducts(Pageable pageable){
        return productRepository.findAll(pageable);
    }

    public boolean addProduct(String name , Integer price) {
        Product p = new Product();
        p.setQuantity(0);
        p.setName(name);
        p.setPrice(price);
        productRepository.save(p);
        return true;
    }

    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }
}
