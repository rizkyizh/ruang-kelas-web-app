import {
  InputForm,
  TextFormLabel,
  TextEditor
} from '@features/_global/components';
import { useCategoryDropdown } from '@features/_global/hooks';
import { useCourseCreation } from '@features/courses/hooks/useCourseCreation';
import { courseFormDataStateModel_To_CourseCreationModel } from '@features/courses/mappers';
import { courseCreationDrawerAtom } from '@features/courses/stores';
import { IFormCourseCreationModelState } from '@features/courses/types';
import {
  Box,
  Button,
  Text,
  Dropdown,
  RightDrawer,
  Toggle,
  useForm,
  searchParamsToObject,
  Flex
} from '@hudoro/admin';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const initialErrorState = {
  title: '',
  category: '',
  price: '',
  thumbnail: '',
  instructor: '',
  description: '',
  period: '',
  start: '',
  end: ''
};

export function CourseCreationDrawer() {
  const [errors, setErrors] = useState(initialErrorState);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueries = searchParamsToObject(searchParams.toString());

  const [creationDrawer, setCreationDrawer] = useAtom(courseCreationDrawerAtom);
  const form = useForm<IFormCourseCreationModelState>(creationDrawer.dataState);

  const {
    items: categoryDropdowns,
    handleClickCategoryDropdown,
    isLoading: isLoadingEaCodeDD
  } = useCategoryDropdown();

  const validate = useCallback(() => {
    const newErrors = { ...initialErrorState };

    if (!form.values.title) {
      newErrors.title = 'Title is required';
    }

    if (!form.values.price) {
      newErrors.price = 'Price is required';
    }
    if (!form.values.thumbnail) {
      newErrors.thumbnail = 'Thumbnail is required';
    }
    if (!form.values.instructor) {
      newErrors.instructor = 'Instructor is required';
    }
    if (!form.values.description) {
      newErrors.description = 'Descripion is required';
    }
    if (!form.values.periode) {
      newErrors.period = 'Period is required';
    }
    if (!form.values.start) {
      newErrors.start = 'Start is required';
    }
    if (!form.values.end) {
      newErrors.end = 'End is required';
    }

    if (!form.values.category.name) {
      newErrors.category = 'Category is required';
    }

    const isValid = Object.values(newErrors).every(value => value === '');
    setErrors(isValid ? initialErrorState : newErrors);

    return isValid;
  }, [form.values]);

  const handleBackButton = useCallback(() => {
    setErrors(initialErrorState);
    form.reset();
    setCreationDrawer(RESET);
  }, [form, setCreationDrawer]);

  const onChangeField: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value }
  }) => {
    if (name === 'is_enabled') {
      form.setValue(name as keyof typeof form.values, !form.values.is_enabled);
      return;
    }
    setErrors(initialErrorState);
    form.setValue(name as keyof typeof form.values, value);
  };

  const { create, update, isPending } = useCourseCreation();

  const handleSubmit = useCallback(async () => {
    if (!validate()) return;

    if (creationDrawer.action === 'CREATE') {
      console.log(form.values);
      const reqBody = courseFormDataStateModel_To_CourseCreationModel(
        form.values
      );
      console.log(reqBody);
      const res = await create(reqBody);
      if (res.status === true) {
        handleBackButton();
      }
    }

    if (creationDrawer.action === 'UPDATE') {
      console.log(form.values);
      const reqBody = courseFormDataStateModel_To_CourseCreationModel(
        form.values
      );
      console.log(reqBody);

      const res = await update(reqBody, form.values.id);
      if (res.status === true) {
        handleBackButton();
      }
    }
  }, [form, creationDrawer, validate, create, update, handleBackButton]);

  return (
    <>
      <RightDrawer
        show={creationDrawer.show}
        onHide={handleBackButton}
        style={{ minWidth: '60%' }}
      >
        <Box gap="md" paddingBottom="spacing-16">
          <Text fontFamily="Poppins" fontWeight="medium" fontSize="md">
            {creationDrawer.action === 'CREATE' ? 'Create' : 'Update'} Course
          </Text>

          <Flex direction="row" gap="md">
            <InputForm
              inputKey={`${creationDrawer.show}-${form.values.id}`}
              label="Title"
              name="title"
              value={form.values.title}
              onChange={onChangeField}
              error={errors.title}
            />

            <Box gap="sm" justify="flex-end">
              <Box direction="row" gap="sm" marginBottom="sm">
                <Toggle
                  size="lg"
                  name="is_enabled"
                  onChange={onChangeField}
                  checked={form.values.is_enabled}
                />
                <Text fontFamily="Poppins" fontSize="md">
                  Active
                </Text>
              </Box>
            </Box>
          </Flex>

          <Flex direction="row" gap="md">
            <InputForm
              inputKey={`${creationDrawer.show}-${form.values.id}`}
              label="Thumbnail"
              name="thumbnail"
              value={form.values.thumbnail}
              onChange={onChangeField}
              error={errors.thumbnail}
              inputProps={{
                inputUse: 'addons',
                leftAddons: 'https://'
              }}
            />

            <Box
              gap="sm"
              onClick={handleClickCategoryDropdown}
              width="width-full"
            >
              <Text fontFamily="Poppins" fontSize="sm" aria-required>
                Category
              </Text>
              <Dropdown
                key={`${creationDrawer.show}-${form.values.category.id}`}
                dropdownLists={
                  isLoadingEaCodeDD
                    ? [
                      {
                        label: 'Loading....',
                        value: 'loading....'
                      }
                    ]
                    : categoryDropdowns !== undefined
                      ? [
                        ...categoryDropdowns.map(e => ({
                          label: e.name,
                          value: e.id.toString()
                        }))
                      ]
                      : []
                }
                defaultValue={
                  form.values.category.id
                    ? [
                      {
                        label: form.values.category.name,
                        value: form.values.category.id.toString()
                      }
                    ]
                    : []
                }
                onChange={e => {
                  form.setValue('category', {
                    name: e[0].label,
                    id: Number(e[0].value)
                  });
                  searchParams.delete('searchCategory');
                  setSearchParams(searchParams);
                }}
                searchAble
                onSearch={e =>
                  setSearchParams({
                    ...searchQueries,
                    searchCategory: e
                  })
                }
              />
              {errors.category && (
                <Text color="error" fontSize="xs">
                  {errors.category}
                </Text>
              )}
            </Box>
          </Flex>
          <InputForm
            inputKey={`${creationDrawer.show}-${form.values.id}`}
            label="Instructor"
            name="instructor"
            value={form.values.instructor}
            onChange={onChangeField}
            error={errors.instructor}
          />

          <Flex direction="row" gap="md">
            <InputForm
              inputKey={`${creationDrawer.show}-${form.values.id}`}
              label="Price"
              name="price"
              value={form.values.price}
              onChange={onChangeField}
              error={errors.price}
            />

            <InputForm
              inputKey={`${creationDrawer.show}-${form.values.id}`}
              label="Period"
              name="periode"
              value={form.values.periode}
              onChange={onChangeField}
              error={errors.period}
            />
          </Flex>

          <Flex direction="row" gap="md">
            <InputForm
              inputKey={`${creationDrawer.show}-${form.values.id}`}
              label="Start"
              name="start"
              value={form.values.start}
              onChange={onChangeField}
              error={errors.start}
              inputProps={{
                type: 'date'
              }}
            />

            <InputForm
              inputKey={`${creationDrawer.show}-${form.values.id}`}
              label="End"
              name="end"
              value={form.values.end}
              onChange={onChangeField}
              error={errors.end}
              inputProps={{
                type: 'date'
              }}
            />
          </Flex>

          <Box gap="sm">
            <TextFormLabel>Description</TextFormLabel>
            <TextEditor
              value={form.values.description}
              onResult={e => {
                form.setValue('description', e);
                errors.description = '';
              }}
              key={`${creationDrawer.show}-${form.values.id}`}
            />
            {errors.description && (
              <Text fontFamily="Poppins" color="error" fontSize="sm">
                {errors.description}
              </Text>
            )}
          </Box>

          <Button success onClick={handleSubmit} disabled={isPending}>
            {isPending
              ? 'Loading...'
              : creationDrawer.action === 'CREATE'
                ? 'Create'
                : 'Update'}
          </Button>
        </Box>
      </RightDrawer>
    </>
  );
}
