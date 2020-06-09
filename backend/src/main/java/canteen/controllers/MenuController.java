package canteen.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import canteen.entity.implementations.Menu;
import canteen.payloads.AddMenuRequest;
import canteen.services.MenuService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/menus")
@CrossOrigin(origins = "http://localhost:4200")
public class MenuController {
    private MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping()
    public Iterable<Menu> getMenus(Pageable pageable){
        return menuService.findAll(pageable);
    }

    @GetMapping("deleteMenu")
    public void deleteMenu(@RequestParam("id") Long id){
        menuService.deleteById(id);
    }

    @GetMapping("getMenu")
    public Menu getMenu(@RequestParam("id") Long id){
       return menuService.getById(id);
    }

    @PostMapping("addMenu")
    public Map<String,String> addMenu(@RequestBody AddMenuRequest request){

        Map<String, String> res = new HashMap<>();
        if(menuService.addMenu(request.getName(), request.getDishes())){
            res.put("message","Меню успешно добавлено") ;
        }
        else {
            res.put("message","Ошибка") ;
        }

        return res;
    }
}
