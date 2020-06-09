package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.Dish;
import canteen.entity.implementations.Menu;
import canteen.persistence.DishesRepository;
import canteen.persistence.MenuRepository;

import java.util.List;

@Service
public class MenuService {

    private MenuRepository menuRepository;
    private DishesRepository dishesRepository;

    @Autowired
    public MenuService(MenuRepository menuRepository, DishesRepository dishesRepository) {
        this.menuRepository = menuRepository;
        this.dishesRepository = dishesRepository;
    }

    public Iterable<Menu> findAll(Pageable pageable){
        return menuRepository.findAll(pageable);
    }

    public void deleteById(Long id) {
        menuRepository.deleteById(id);
    }

    public boolean addMenu(String name, List<Dish> dishes) {
        Menu m = new Menu(name);
        m.getDishes().addAll(dishes);
        menuRepository.save(m);
        return true;
    }

    public Menu getById(Long id) {
        return menuRepository.getById(id);
    }
}
