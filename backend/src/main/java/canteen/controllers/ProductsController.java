package canteen.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import canteen.entity.implementations.Product;
import canteen.payloads.AddWithNameRequest;
import canteen.services.ProductsService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductsController {

    private final ProductsService productsService;

    @Autowired
    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/products")
    public Iterable<Product> getProducts(Pageable pageable){
        return productsService.getAllProducts(pageable);
    }

    @GetMapping("/Allproducts")
    public Iterable<Product> getAllProducts(){
        return productsService.findAll();
    }

    @PostMapping("/addProduct")
    public Map<String,String> addproduct(@RequestBody AddWithNameRequest request){

        Map<String, String> res = new HashMap<>();
        if(productsService.addProduct(request.getName(), request.getPrice())){
            res.put("message","Продукт успешно добавлен") ;
        }
        else {
            res.put("message","Ошибка") ;
        }

        return res;
    }
}
