package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    /**
     * User name.
     */
    @NotBlank
    private String username;

    /**
     * User password.
     */
    @NotBlank
    private String password;

}
