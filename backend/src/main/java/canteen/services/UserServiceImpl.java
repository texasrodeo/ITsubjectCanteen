package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.Role;
import canteen.entity.implementations.User;
import canteen.entity.implementations.UserDetailsImpl;
import canteen.payloads.MessageResponse;
import canteen.persistence.RoleRepository;
import canteen.persistence.UserRepository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;


@Service
public class UserServiceImpl implements UserDetailsService {

    UserRepository userRepository;

    RoleRepository roleRepository;

    BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Constructor.
     * @param userRepository user DAO
     *@param roleRepository relos DAO
     * @param bCryptPasswordEncoder password encrypt
     * */
    @Autowired
    public UserServiceImpl(final UserRepository userRepository, final RoleRepository roleRepository,
                           BCryptPasswordEncoder bCryptPasswordEncoder)
    {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return UserDetailsImpl.build(user);
    }

    public ResponseEntity<?> saveUser(User user, Set<String> strRoles) {
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName("ROLE_USER")
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                if ("ROLE_ADMIN".equals(role)) {
                    Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);
                }
                else if("ROLE_ACCOUNTANT".equals(role)){
                    Role accRole = roleRepository.findByName("ROLE_ACCOUNTANT")
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(accRole);
                }
                else if("ROLE_COOKER".equals(role)){
                    Role cookerRole = roleRepository.findByName("ROLE_COOKER")
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(cookerRole);
                }
                else if("ROLE_CASHIER".equals(role)){
                    Role cookerRole = roleRepository.findByName("ROLE_CASHIER")
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(cookerRole);
                }
                else {
                    Role userRole = roleRepository.findByName("ROLE_USER")
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Успешная регистрация"));
    }

    public User findByUsername(String name) {
        return userRepository.findByUsername(name);
    }

    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }



    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }


}
