package canteen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import canteen.entity.implementations.DeliveryOrder;
import canteen.payloads.AddDeliveryRequest;
import canteen.services.DeliveryService;
import canteen.services.UserServiceImpl;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/deliveries")
@CrossOrigin(origins = "http://localhost:4200")
public class DeliveryController {

    private DeliveryService deliveryService;

    private UserServiceImpl userService;

    @Autowired
    public DeliveryController(DeliveryService deliveryService, UserServiceImpl userService){
        this.deliveryService = deliveryService;
        this.userService = userService;
    }

    @PostMapping("/addDelivery")
    public Map<String,String> addDelivery(@RequestBody AddDeliveryRequest request){
        Map<String, String> res = new HashMap<>();
        if(deliveryService.addDelivery(request.getProductId(), request.getProviderId(), request.getQuantity(), request.getSum())){
            res.put("message","Заказ доставки прошел успешно") ;
        }
        else {
            res.put("message","Ошибка") ;
        }

        return res;

    }

    @GetMapping("/active")
    public Iterable<DeliveryOrder> getActiveDelieveries(Pageable pageable){
        return deliveryService.getAllActiveProducts(pageable);
        //return deliveryService.findAll();
    }

    @GetMapping("/confirm")
    public Map<String, String> getActiveDelieveries(@RequestParam ("id") Long id){
        Map<String,String> res = new HashMap<>();
        if(deliveryService.confirmDelivery(id)){
            res.put("message", "Поставка успешно подтверждена");
        }
        else {
            res.put("message", "Ошибка");
        }
        return res;
    }


    @GetMapping("/confirmed")
    public Iterable<DeliveryOrder> getConfirmedDelieveries(Pageable pageable){
        return deliveryService.getAllConfirmedProducts(pageable);
    }
}
