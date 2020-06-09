package canteen.entity.implementations;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="product_id")
    private Long id;

    @Basic
    private String name;

    @Basic
    private Integer quantity;

    @Basic
    private Integer price;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<DeliveryOrder> orders = new ArrayList<>();

    public Product(String name, Integer price){
        this.name = name;
        this.quantity = 0;
        this.price = price;
    }



    public Product(Long id){
        this.id = id;
    }

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "dish_ingredient",
        joinColumns = @JoinColumn(name = "dish_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Dish> dishes = new ArrayList<>();
}
