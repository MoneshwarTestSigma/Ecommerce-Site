package com.ecomsite.site.specifications;

import com.ecomsite.site.constant.Operators;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class BaseSpecificationBuilder {
    public List<Criteria> criteriaList = new ArrayList<>();
    public List<Criteria> builder(String data){
        criteriaList.clear();
        String regex = "(.*?):(.*?),";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(data);

        while (matcher.find()) {
            System.out.println(matcher);
            String name = matcher.group(1);
            String value = matcher.group(2);
            criteriaList.add(new Criteria(name, Operators.COLON, value));
        }

        return criteriaList;
    }
}
