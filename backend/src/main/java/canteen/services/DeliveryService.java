package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.DeliveryOrder;
import canteen.entity.implementations.Product;
import canteen.persistence.DeliveryRepository;
import canteen.persistence.ProductRepository;

import java.sql.Timestamp;
import java.util.Date;

@Service
public class DeliveryService {
    private DeliveryRepository deliveryRepository;

    private ProductRepository productRepository;

    @Autowired
    public DeliveryService(DeliveryRepository deliveryRepository, ProductRepository productRepository) {
        this.deliveryRepository = deliveryRepository;
        this.productRepository = productRepository;
    }

    public boolean addDelivery(Long productId, Long providerId, Integer quantity, Integer sum) {
        Date date = new Date();
        DeliveryOrder deliveryOrder = new DeliveryOrder(productId,providerId,quantity,new Timestamp(date.getTime()), sum);
        deliveryRepository.save(deliveryOrder);
        return true;
    }

    public Page<DeliveryOrder> getAllProducts(Pageable pageable){
        return deliveryRepository.findAll(pageable);
    }

    public Page<DeliveryOrder> getAllConfirmedProducts(Pageable pageable) {
        return deliveryRepository.getDeliveryOrdersByStatus( "CONFIRMED", pageable);
    }

    public Page<DeliveryOrder> getAllActiveProducts(Pageable pageable) {
       return deliveryRepository.getDeliveryOrdersByStatus("ACTIVE", pageable);
    }

    public Iterable<DeliveryOrder> findAll() {
        return deliveryRepository.findAll();
    }

    public boolean confirmDelivery(Long id) {
        DeliveryOrder d = deliveryRepository.getById(id);
        if(d==null){
            return false;
        }
        d.setStatus("CONFIRMED");
        Product p = d.getProduct();
        p.setQuantity(p.getQuantity()+d.getQuantity());
        productRepository.save(p);
        deliveryRepository.save(d);
        return true;
    }
}
