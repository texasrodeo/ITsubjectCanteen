package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import canteen.entity.implementations.Product;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddDishRequest {
    @NotBlank
    private String name;

    @NotBlank
    private Integer price;

    @NotBlank
    private String recipe;

    @NotBlank
    private List<Product> ingredients;
}
