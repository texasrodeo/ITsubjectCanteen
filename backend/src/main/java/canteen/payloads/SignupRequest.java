package canteen.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {
    /**
     * user name.
     */
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    /**
     * user email.
     */
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    /**
     * user role.
     */
    private ArrayList<String> role;

    /**
     * user password.
     */
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

}
