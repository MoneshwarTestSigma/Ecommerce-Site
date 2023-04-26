package com.ecomsite.site.criteria;

import lombok.Data;

@Data
public class Criteria {
    String key;
    String value;
    Criteria(String key,String value)
    {
        this.key = key;
        this.value = value;
    }
}
