package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddDeliveryRequest {
    @NotBlank
    private Long productId;

    @NotBlank
    private Long providerId;

    @NotBlank
    private Integer quantity;

    @NotBlank
    private Integer sum;

}
