package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddProviderRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String phone;
}
