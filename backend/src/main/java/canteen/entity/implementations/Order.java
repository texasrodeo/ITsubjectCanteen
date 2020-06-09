package canteen.entity.implementations;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="order_id")
    private Long id;

    private Integer price;

    private String clientPhone;

    private String clientName;

    private String status;

    public Order(String clientName, String clientPhone, Integer price){
        this.clientName = clientName;
        this.clientPhone = clientPhone;
        this.price = price;
        this.status = "ACTIVE";
    }

    public Order(Long id){
        this.id = id;
    }


    @OneToMany(cascade = {CascadeType.ALL},mappedBy = "order")
    private List<DishInOrder> dishes = new ArrayList<>();
}
