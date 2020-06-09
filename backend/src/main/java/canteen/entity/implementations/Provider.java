package canteen.entity.implementations;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "providers")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="provider_id")
    private Long id;

    private String name;

    private String phone;

    @JsonIgnore
    @OneToMany(mappedBy = "provider")
    private List<DeliveryOrder> orders = new ArrayList<>();

    public Provider(String name, String phone) {
        this.name=name;
        this.phone = phone;
    }

    public Provider(Long id){
        this.id = id;
    }
}
