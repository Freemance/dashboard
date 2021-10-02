import React, { ChangeEvent } from 'react';
// Mui components
import { Card } from '@material-ui/core';
import { GlobalContext } from 'src/context';
// Icons
import { File, Image, PlusSquare } from 'react-feather';

// Styles
import useUploaderStyles from './ImageUploader.style';

// Type
import { IProps } from './type';
import Svgicon from 'src/components/atoms/SvgIcon';
import { setSkill } from 'src/context/reducer';

const ImageUploader: React.FC<IProps> = ({
  width,
  height,
  onUpload,
}: IProps) => {
  const classes = useUploaderStyles({ width, height });
  const { state, dispatch } = React.useContext(GlobalContext);

  /**
   * Get uploaded file
   * @param param0 ChangeEvent<HTMLInputElemnt>
   * @returns boolean
   *
   */
  const onChange = ({
    target: { validity, files },
  }: ChangeEvent<HTMLInputElement>) => {
    const file = files[0];

    if (!file) {
      return false;
    }
    return validity.valid && handleSvgFile(file);
  };

  const handleSvgFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const icon: string[] = []; // This is the final variable that will be sent to the server

      const svgData = typeof e.target.result === 'string' && e.target.result;
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgData, 'image/svg+xml');
      const pathTags = doc.getElementsByTagName('path');

      // Get each path of the svg element and push it to an array.
      const pathArray = Array.prototype.slice.call(pathTags);
      pathArray.length > 0 &&
        pathArray.forEach((path: HTMLElement) => {
          icon.push(path.getAttribute('d'));
        });
      dispatch(
        setSkill({
          icon: icon,
          svgPath: URL.createObjectURL(file),
        })
      );
    };
    reader.readAsText(file);
  };

  return (
    <Card className={classes.root}>
      {state.system.currentSkill.icon.length > 0 ? (
        <Svgicon
          className={classes.fileIcon}
          color="info"
          width={80}
          height={80}
          paths={state.system.currentSkill.icon}
        />
      ) : (
        <Image className={classes.fileIcon} />
      )}
      <input
        accept="image/svg+xml"
        id="image-upload"
        multiple={false}
        onChange={onChange}
        style={{ display: 'none' }}
        type="file"
      />
      <label htmlFor="image-upload" className={classes.label}>
        <PlusSquare className={classes.addIcon} />
      </label>
    </Card>
  );
};

export default ImageUploader;
