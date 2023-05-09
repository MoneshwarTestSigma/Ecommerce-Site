package com.ecomsite.site.controller;


import com.ecomsite.site.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(value = "images")
public class ImageController {
    @Autowired
    public ImageService imageService;

    @PostMapping()
    public ResponseEntity uploadImage(@RequestParam("file") MultipartFile file,@RequestParam("id") Long id){
        return this.imageService.uploadToLocalFileSystem(file,id);
    }

    @GetMapping(
            value = "/{imageName:.+}",
            produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_PNG_VALUE}
    )
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable(name = "imageName") String fileName) throws IOException {
        return this.imageService.getImageWithMediaType(fileName);
    }

    public String getUrlFormId(Long id)
    {
        return imageService.getUrlFromId(id);
    }

}
