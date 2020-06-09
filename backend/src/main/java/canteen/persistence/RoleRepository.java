package canteen.persistence;


import org.springframework.data.jpa.repository.JpaRepository;
import canteen.entity.implementations.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    /**
     * Gets role
     * @param name role name
     * @return role
     * */
    Optional<Role> findByName(String name);
}
