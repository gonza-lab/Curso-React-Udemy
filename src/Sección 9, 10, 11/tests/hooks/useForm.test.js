import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Gonsalo',
    email: 'emailx@email.com',
  };

  test('Debe de regresar un valor por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Gonzalo',
        },
      });
    });

    const [value] = result.current;

    expect(value).toEqual({ ...initialForm, name: 'Gonzalo' });
  });

  test('Debe resetear el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Gonzalo',
        },
      });

      reset();
    });

    const [value] = result.current;

    expect(value).toEqual({ ...initialForm, name: 'Gonsalo' });
  });
});
