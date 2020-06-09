package canteen.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import canteen.entity.implementations.Dish;
import canteen.entity.implementations.Product;
import canteen.persistence.DishesRepository;

import java.util.List;

@Service
public class DishesService {

    private DishesRepository dishesRepository;

    @Autowired
    public DishesService(DishesRepository dishesRepository) {
        this.dishesRepository = dishesRepository;
    }




    public boolean addDish(String name, Integer price, String recipe, List<Product> products) {
        Dish p = new Dish(name,price, recipe);
        p.getProducts().addAll(products);
        dishesRepository.save(p);
        return true;
    }

    public Dish findById(Long id) {
        return dishesRepository.getById(id);
    }

    public Iterable<Dish> findAll(Pageable pageable){
        return dishesRepository.findAll(pageable);
    }

    public void deleteById(Long id) {
        dishesRepository.deleteById(id);
    }

    public Iterable<Dish> getAll() {
        return dishesRepository.findAll();
    }
}
