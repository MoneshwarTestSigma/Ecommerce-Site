package com.ecomsite.site.specifications;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class Criteria {
    String key;
    String value;
    Criteria (String key,String value){
        this.key = key;
        this.value = value;
    }
}
