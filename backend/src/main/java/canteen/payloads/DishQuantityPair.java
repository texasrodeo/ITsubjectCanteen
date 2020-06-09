package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import canteen.entity.implementations.Dish;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DishQuantityPair {
    private Dish dish;
    private Integer quantity;
}
