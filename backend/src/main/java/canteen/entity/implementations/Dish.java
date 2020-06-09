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
@Table(name = "dishes")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="dish_id")
    private Long id;

    @Basic
    private String name;

    @Basic
    private Integer price;

    @Basic
    private String recipe;

    public Dish(String name, Integer price, String recipe){
        this.name = name;
        this.price = price;
        this.recipe = recipe;

    }

    public Dish(Long id){
        this.id = id;
    }

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "dish_ingredient",
        joinColumns = @JoinColumn(name = "product_id"),
        inverseJoinColumns = @JoinColumn(name = "dish_id"))
    private List<Product> products = new ArrayList<>();

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "menu_dish",
        joinColumns = @JoinColumn(name = "menu_id"),
        inverseJoinColumns = @JoinColumn(name = "dish_id"))
    private List<Menu> menus = new ArrayList<>();

    @JsonIgnore
    @OneToMany(cascade = {CascadeType.ALL},mappedBy = "dish")
    private List<DishInOrder> orders = new ArrayList<>();


}
