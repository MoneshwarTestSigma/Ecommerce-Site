package com.ecomsite.site.specifications;

import com.ecomsite.site.constant.Operators;
import lombok.Data;

@Data
public class Criteria {
    String key;
    Operators operators;
    String value;
    Criteria (String key, Operators colon, String value){
        this.key = key;
        this.operators=colon;
        this.value = value;
    }
}
