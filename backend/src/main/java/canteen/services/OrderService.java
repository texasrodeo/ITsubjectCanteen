package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.*;
import canteen.payloads.DishQuantityPair;
import canteen.persistence.DishInOrderRepository;
import canteen.persistence.OrderRepository;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    private DishInOrderRepository dishInOrderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, DishInOrderRepository dishInOrderRepository) {
        this.orderRepository = orderRepository;
        this.dishInOrderRepository = dishInOrderRepository;
    }

    public boolean addOrder(String clientName, String clientPhone, Integer price, List<DishQuantityPair> dishInOrderList){
        Order p = new Order(clientName,clientPhone, price);
//        p.getDishes().addAll(dishInOrderList);
        orderRepository.save(p);
        for(DishQuantityPair d: dishInOrderList){
            DishInOrder dish = new DishInOrder(p.getId(), d.getDish().getId(), d.getQuantity());
            dishInOrderRepository.save(dish);
        }

        return true;
    }

    public Iterable<Order> getAllActiveorders(Pageable pageable) {
        return orderRepository.getOrderByStatus("ACTIVE", pageable);
    }

    public Iterable<Order> getAllConfirmedOrders(Pageable pageable) {
        return orderRepository.getOrderByStatus("CONFIRMED", pageable);
    }

    public boolean confirmOrder(Long id) {
        Order d = orderRepository.getById(id);
        if(d==null){
            return false;
        }
        d.setStatus("CONFIRMED");
        //TODO Добавить уменьшение количества продуктов
        orderRepository.save(d);

//        Product p = d.getProduct();
//        p.setQuantity(p.getQuantity()+d.getQuantity());
//        productRepository.save(p);
//        deliveryRepository.save(d);
        return true;
    }


}
