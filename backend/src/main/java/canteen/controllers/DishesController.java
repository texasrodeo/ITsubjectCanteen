package canteen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import canteen.entity.implementations.Dish;
import canteen.payloads.AddDishRequest;
import canteen.services.DishesService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dishes")
@CrossOrigin(origins = "http://localhost:4200")
public class DishesController {

    private final DishesService dishesService;


    @Autowired
    public DishesController(DishesService dishesService) {
        this.dishesService = dishesService;
    }


    @GetMapping()
    public Iterable<Dish> getAllDishes(Pageable pageable){
        return dishesService.findAll(pageable);
    }

    @GetMapping("/findAll")
    public Iterable<Dish> findAllDishes(){
        return dishesService.getAll();
    }

    @GetMapping("getDish")
    public Dish getAllDishes(@RequestParam ("id") Long id){
        return dishesService.findById(id);
    }

    @GetMapping("deleteDish")
    public void deleteDishe(@RequestParam ("id") Long id){
         dishesService.deleteById(id);
    }

    @PostMapping("addDish")
    public Map<String,String> addDish(@RequestBody AddDishRequest request){

        Map<String, String> res = new HashMap<>();
        if(dishesService.addDish(request.getName(), request.getPrice(), request.getRecipe(), request.getIngredients() )){
            res.put("message","Блюдо успешно добавлено") ;
        }
        else {
            res.put("message","Ошибка") ;
        }

        return res;
    }
}
