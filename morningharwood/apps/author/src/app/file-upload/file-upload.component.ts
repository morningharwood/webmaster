import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'mh-file-upload',
  styleUrls: [ './file-upload.component.scss' ],
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent {
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[ 0 ] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `images/${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
    const ref = this.storage.ref(path);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges()
                        .pipe(
                          finalize(() => {
                            this.downloadURL = ref.getDownloadURL();
                            console.log(this.downloadURL);
                          }),
                        );
  }

  decodeURIComponent(uri) {
    return decodeURIComponent(uri)
      .split('?')[ 0 ].split('/o/images/')[ 1 ];
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
