package canteen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import canteen.entity.implementations.Provider;
import canteen.payloads.AddProviderRequest;
import canteen.services.ProvidersService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/providers")
@CrossOrigin(origins = "http://localhost:4200")
public class ProvidersController {

    private final ProvidersService productsService;

    @Autowired
    public ProvidersController(ProvidersService productsService) {
        this.productsService = productsService;
    }

    @GetMapping()
    public Iterable<Provider> getProviders(Pageable pageable){
        return productsService.getAllProviders(pageable);
    }

    @GetMapping("/Allproviders")
    public Iterable<Provider> getAllProviders(){
        return productsService.findAll();
    }

    @PostMapping("/addProvider")
    public Map<String,String> addproduct(@RequestBody AddProviderRequest request){

        Map<String, String> res = new HashMap<>();
        if(productsService.addProvider(request.getName(), request.getPhone())){
            res.put("message","Поставщик успешно добавлен") ;
        }
        else {
            res.put("message","Ошибка") ;
        }

        return res;
    }
}
