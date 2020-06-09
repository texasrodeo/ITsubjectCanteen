package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddOrderRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String phone;

    @NotBlank
    private Integer price;

    @NotBlank
    private List<DishQuantityPair> dishes;
}
