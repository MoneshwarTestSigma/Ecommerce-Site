package com.ecomsite.site.criteria;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CriteriaBuilder {
    public List<Criteria> builder(String data){
        String[] splittedData=data.split(",") ;
        List<Criteria> criteriaList = new ArrayList<>();
        for(String s: splittedData)
        {
            String[] splittedCriteria=s.split(":") ;
          criteriaList.add(new Criteria(splittedCriteria[0],splittedCriteria[1]));
        }
        return criteriaList;
    }
}
