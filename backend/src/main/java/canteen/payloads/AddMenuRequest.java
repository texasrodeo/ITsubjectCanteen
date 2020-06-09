package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import canteen.entity.implementations.Dish;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddMenuRequest {

    @NotBlank
    private String name;

    @NotBlank
    private List<Dish> dishes;
}
