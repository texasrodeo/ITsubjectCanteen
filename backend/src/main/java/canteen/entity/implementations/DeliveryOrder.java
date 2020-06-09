package canteen.entity.implementations;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "delivery_orders")
public class DeliveryOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;



    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "provider_id")
    private Provider provider;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column
    private Integer quantity;

    @Column
    private Timestamp date;

    @Column
    private String status;

    @Column
    private Integer sum;

    public DeliveryOrder(){
    }

    public DeliveryOrder(Long productId, Long providerId, Integer quantity, Timestamp timestamp, Integer sum) {
        this.provider = new Provider(providerId);
        this.product = new Product(productId);
        this.quantity = quantity;
        this.date = timestamp;
        this.status = "ACTIVE";
        this.sum = sum;
    }
}
