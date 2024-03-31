import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./CadastroUsuario.css";
import { ReactComponent as EyeOpenIcon } from "../../src/eye-open.svg";
import { ReactComponent as EyeClosedIcon } from "../../src/eye-closed.svg";

const schema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  birthDate: z.string().optional(),
  gender: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  serviceType: z.string().min(1).nonempty(),
});

function CadastroUsuario({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="CadastroUsuario">
      <h1>Formulário de Cadastro de prestador de serviço</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome:</label>
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Email:</label>
        <input type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Senha:</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        </div>
        {errors.password && <p>{errors.password.message}</p>}

        <label>Confirmar Senha:</label>
        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
          />
          <button
            type="button"
            className={`password-toggle ${
              showConfirmPassword ? "visible" : ""
            }`}
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        </div>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <label>Data de Nascimento:</label>
        <input type="date" {...register("birthDate")} />
        {errors.birthDate && <p>{errors.birthDate.message}</p>}

        <label>Gênero:</label>
        <select {...register("gender")}>
          <option value="">Selecione...</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}

        <label>Telefone:</label>
        <input type="text" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}

        <label>Endereço:</label>
        <input type="text" {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
        <label>Tipo de Serviço:</label>
        <input type="text" {...register("serviceType")} />
        {errors.serviceType && <p>{errors.serviceType.message}</p>}

        <button class="submit" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
