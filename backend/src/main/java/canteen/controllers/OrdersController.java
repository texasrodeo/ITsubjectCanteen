package canteen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import canteen.entity.implementations.Order;
import canteen.payloads.AddOrderRequest;
import canteen.services.OrderService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200")

public class OrdersController {

    private OrderService orderService;

    @Autowired
    public OrdersController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/addOrder")
    public Map<String,String> addOrder(@RequestBody AddOrderRequest request){
        Map<String, String> res = new HashMap<>();
        if(orderService.addOrder(request.getName(), request.getPhone(), request.getPrice(), request.getDishes())){
            res.put("message","аказ был успешно сформирован") ;
        }
        else {
            res.put("message","Ошибка") ;
        }

        return res;
    }

    @GetMapping("/active")
    public Iterable<Order> getActiveOrders(Pageable pageable){
        return orderService.getAllActiveorders(pageable);
        //return deliveryService.findAll();
    }

    @GetMapping("/confirm")
    public Map<String, String> confirmOrder(@RequestParam ("id") Long id){
        Map<String,String> res = new HashMap<>();
        if(orderService.confirmOrder(id)){
            res.put("message", "Заказ успешно подтвержден");
        }
        else {
            res.put("message", "Ошибка");
        }
        return res;
    }


    @GetMapping("/confirmed")
    public Iterable<Order> getConfirmedOrders(Pageable pageable){
        return orderService.getAllConfirmedOrders(pageable);
    }

}
