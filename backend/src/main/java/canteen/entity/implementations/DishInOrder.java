package canteen.entity.implementations;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name="dish_in_order")
public class DishInOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "dish_id")
    private Dish dish;

    @Column
    private Integer quantity;





    public DishInOrder(Long orderId, Long dishId, Integer quantity) {
        this.order = new Order(orderId);
        this.dish = new Dish(dishId);
        this.quantity = quantity;

    }
}
