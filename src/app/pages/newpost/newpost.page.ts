import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IInputDescription, IRangeValidation, ISelectDescription } from 'src/app/common/interfaces/input.interface';
import { INPUT_CONSTANTS_DESCRIPTIONS } from 'src/app/common/constants/input.constants';
import { BASIC_LENGTH_REQUIREMENT } from 'src/app/common/constants/validationlength.constants';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IButton } from 'src/app/common/interfaces/button.interface';
import { NEWPOST_BUTTON_CONSTANT } from 'src/app/common/constants/button.constants';

@Component({
  selector: 'app-newpost-page',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage {
  public newpostFormGroup: FormGroup;

  public firebaseImageUrl: any;
  public titleValidation: IRangeValidation;
  public subtitleValidation: IRangeValidation;
  public descriptionValidation: IRangeValidation;

  public titleInput: IInputDescription;
  public subtitleInput: IInputDescription;
  public descriptionInput: IInputDescription;
  public dateInput: IInputDescription;
  public galleryInput: ISelectDescription;
  public buttonConstants: IButton;

  constructor(private formBuilder: FormBuilder,
              private storageService: StorageService,
              private authService: AuthService) {
    this.variableInitialization();
  }
  get titleControl(): FormControl { return this.newpostFormGroup.get('title') as FormControl; }
  get subtitleControl(): FormControl { return this.newpostFormGroup.get('subtitle') as FormControl; }
  get dateControl(): FormControl { return this.newpostFormGroup.get('date') as FormControl; }
  get descriptionControl(): FormControl { return this.newpostFormGroup.get('description') as FormControl; }
  get galleryControl(): FormControl { return this.newpostFormGroup.get('gallery') as FormControl; }

  ionViewWillEnter() {
    this.variableInitialization();
  }

  public uploadImg(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      this.firebaseImageUrl = await this.storageService.uploadImg(reader.result, file.name);
    };
  }

  public uploadNewPost() {
    if(this.newpostFormGroup.valid) {
      this.storageService.uploadPost(this.firebaseImageUrl, this.newpostFormGroup.value);
    }
  }

  private variableInitialization() {
    this.firebaseImageUrl = '';
    this.titleInput = INPUT_CONSTANTS_DESCRIPTIONS.title;
    this.subtitleInput = INPUT_CONSTANTS_DESCRIPTIONS.subtitle;
    this.dateInput = INPUT_CONSTANTS_DESCRIPTIONS.date;
    this.descriptionInput = INPUT_CONSTANTS_DESCRIPTIONS.description;
    this.galleryInput = INPUT_CONSTANTS_DESCRIPTIONS.gallery;
    this.titleValidation = BASIC_LENGTH_REQUIREMENT;
    this.subtitleValidation = BASIC_LENGTH_REQUIREMENT;
    this.descriptionValidation = BASIC_LENGTH_REQUIREMENT;
    this.buttonConstants = NEWPOST_BUTTON_CONSTANT;
    this.setNewPostFormGroup();
  }

  private setNewPostFormGroup() {
    this.newpostFormGroup = this.formBuilder.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(this.titleValidation.min),
        Validators.maxLength(this.titleValidation.max),
      ]),
      subtitle: new FormControl('', [
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      gallery: new FormControl('', [
        Validators.required,
      ])
    });
  }

}
