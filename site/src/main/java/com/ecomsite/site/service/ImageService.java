package com.ecomsite.site.service;

import com.ecomsite.site.model.Image;
import com.ecomsite.site.repository.ImageRepository;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;
    public final String storageDirectoryPath = "C:\\Users\\moneshwar\\Desktop\\images";
    public ResponseEntity uploadToLocalFileSystem(MultipartFile file,Long id) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path storageDirectory = Paths.get(storageDirectoryPath);
        if(!Files.exists(storageDirectory)){
            try {
                Files.createDirectories(storageDirectory);
            }catch (Exception e){
                e.printStackTrace();
            }
        }

        Path destination = Paths.get(storageDirectory.toString() + "\\" + fileName);

        try {
            Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("images/")
                .path(fileName)
                .toUriString();
        Image image=new Image(id,fileDownloadUri);
        imageRepository.save(image);
        return ResponseEntity.ok("File added successfully");
    }

    public  byte[] getImageWithMediaType(String imageName) throws IOException {
        Path destination =   Paths.get(storageDirectoryPath+"\\"+imageName);
        return IOUtils.toByteArray(destination.toUri());
    }

    public String getUrlFromId(Long id) {

        Optional<Image> img= imageRepository.findById(id);

        if(img.isPresent())
        {
            return img.get().getImageUrl();
        }
        return "noImage";
    }
}
