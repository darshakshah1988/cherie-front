import * as Yup from 'yup';
import { ADMIN_CLIENT_SIDE_RULES } from '../constants/Validations';

// Add Artist Validation Schema
export const addArtistValidationSchema = Yup.object().shape({
  name: Yup.string().required(ADMIN_CLIENT_SIDE_RULES.ARTIST.NAME.MESSAGE_1),
  overview: Yup.string().required(
    ADMIN_CLIENT_SIDE_RULES.ARTIST.OVERVIEW.MESSAGE_1
  ),
  notableArtworks: Yup.array().of(
    Yup.object().shape({
      artworkName: Yup.string().required(
        ADMIN_CLIENT_SIDE_RULES.ARTIST.NOTABLE_ARTWORK_NAME.MESSAGE_1
      ),
      artworkDescription: Yup.string().required(
        ADMIN_CLIENT_SIDE_RULES.ARTIST.NOTABLE_ARTWORK_DESCRIPTION.MESSAGE_1
      ),
      artworkFile: Yup.mixed().required(
        ADMIN_CLIENT_SIDE_RULES.ARTIST.NOTABLE_ARTWORK_IMAGE.MESSAGE_1
      )
    })
  )
});

/**
 * We are not using Yup to validate uploaded files. Since we are using
 * the react-dropzone package which already has a built-in file validation
 * rules, we will rely on it and this package will return a file rejection
 * array containing validation errors. So we will show these on the UI.
 ---------------------------------------------------------------
 const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
 notableArtworks: Yup.mixed().test(
 'notableArtworks',
 'Unsupported File Format',
 value => SUPPORTED_FORMATS.includes(value.type)
 )
 ---------------------------------------------------------------

 Checkbox validation:
 ---------------------------------------------------------------
 status: Yup.boolean().oneOf(
 [true],
 ADMIN_CLIENT_SIDE_RULES.ARTIST.STATUS.MESSAGE_1
 ),
 ---------------------------------------------------------------

 *
 */
